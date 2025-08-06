import { Component, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { animate, style, transition, trigger } from '@angular/animations';
import { ModalComponent } from 'angular-custom-modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SweetAlertIcon } from 'sweetalert2';

@Component({
    moduleId: module.id,
    templateUrl: './contacts.html',
    animations: [
        trigger('toggleAnimation', [
            transition(':enter', [style({ opacity: 0, transform: 'scale(0.95)' }), animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))]),
            transition(':leave', [animate('75ms', style({ opacity: 0, transform: 'scale(0.95)' }))]),
        ]),
    ],
})
export class ContactsComponent {
    constructor(public fb: FormBuilder) {}
    displayType = 'list';
    @ViewChild('addContactModal') addContactModal!: ModalComponent;

    params!: FormGroup;
    searchUser = '';
    filterdContactsList: any = [];

    contactList: any[] = [];

    ngOnInit() {
        this.initForm();
        this.searchContacts();
    }

    initForm() {
        this.params = this.fb.group({
            id: [0],
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            role: ['', Validators.required],
            phone: ['', Validators.required],
            location: [''],
        });
    }

    searchContacts() {
        this.filterdContactsList = this.contactList.filter((d) => d.name.toLowerCase().includes(this.searchUser.toLowerCase()));
    }

    editUser(user: any = null) {
        this.addContactModal.open();
        this.initForm();
        if (user) {
            this.params.setValue({
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                phone: user.phone,
                location: user.location,
            });
        }
    }

    saveUser() {
        if (this.params.invalid) {
            this.showMessage('Please fill in all required fields.', 'error');
            return;
        }

        const values = this.params.value;

        if (values.id) {
            // update user
            const user = this.contactList.find((d) => d.id === values.id);
            Object.assign(user, values);
        } else {
            // add new user
            const newId = this.contactList.length > 0
                ? Math.max(...this.contactList.map(u => u.id)) + 1
                : 1;

            const newUser = {
                id: newId,
                path: '', // empty profile
                name: values.name,
                email: values.email,
                role: values.role,
                phone: values.phone,
                location: values.location,
                posts: 0,
                followers: '0',
                following: 0,
            };

            this.contactList.unshift(newUser);
        }

        this.searchContacts();
        this.addContactModal.close();
        this.showMessage('Contact saved successfully.');
    }

    deleteUser(user: any) {
        this.contactList = this.contactList.filter((d) => d.id !== user.id);
        this.searchContacts();
        this.showMessage('Contact deleted successfully.');
    }

    showMessage(msg = '', type: SweetAlertIcon = 'success') {
    Swal.fire({
        toast: true,
        icon: type,
        title: msg,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
    });
}
    }

