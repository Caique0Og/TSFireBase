import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cuidadores',
  templateUrl: './cuidadores.page.html',
  styleUrls: ['./cuidadores.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class CuidadoresPage {
  cuidador: any = {};
  listaCuidadores: any[] = [];

  constructor(private firestore: AngularFirestore) {
    this.listarCuidadores();
  }

  async adicionarOuAtualizarCuidador() {
    if (!this.cuidador.nome || !this.cuidador.telefone) return;

    if (this.cuidador.id) {
      await this.firestore.collection('cuidadores').doc(this.cuidador.id).update(this.cuidador);
    } else {
      const docRef = await this.firestore.collection('cuidadores').add(this.cuidador);
      await docRef.update({ id: docRef.id });
    }

    this.cuidador = {};
    this.listarCuidadores();
  }

  listarCuidadores() {
    this.firestore.collection('cuidadores').valueChanges().subscribe(cuidadores => {
      this.listaCuidadores = cuidadores;
    });
  }

  editarCuidador(c: any) {
    this.cuidador = { ...c };
  }

  excluirCuidador(id: string) {
    this.firestore.collection('cuidadores').doc(id).delete();
  }
}
