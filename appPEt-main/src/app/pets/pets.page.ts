import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.page.html',
  styleUrls: ['./pets.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class PetsPage {
  pet: any = {};
  listaPets: any[] = [];

  constructor(private firestore: AngularFirestore) {
    this.listarPets();
  }

  async adicionarOuAtualizarPet() {
    if (!this.pet.nome || !this.pet.especie) return;

    if (this.pet.id) {
      await this.firestore.collection('pets').doc(this.pet.id).update(this.pet);
    } else {
      const docRef = await this.firestore.collection('pets').add(this.pet);
      await docRef.update({ id: docRef.id });
    }

    this.pet = {};
    this.listarPets();
  }

  listarPets() {
    this.firestore.collection('pets').valueChanges().subscribe(pets => {
      this.listaPets = pets;
    });
  }

  editarPet(p: any) {
    this.pet = { ...p };
  }

  excluirPet(id: string) {
    this.firestore.collection('pets').doc(id).delete();
  }
}
