import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { RegisterComponent } from './register/register.component'
@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<RegisterComponent> {
  canDeactivate(component: RegisterComponent): boolean {
    if (component.registerForm.dirty) {
      return confirm('You have unsaved changes. Are you sure you want to leave?');
    }
    return true;
  }
}