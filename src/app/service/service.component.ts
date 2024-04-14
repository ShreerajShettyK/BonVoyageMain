import { Injectable, Component } from '@angular/core';

export interface Task {
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  fromplace: string;
  toplace: string;
  date: Date;
  travellerCount: number;
}

@Component({
  selector: 'app-service', // Adjust the selector as needed
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class ServiceComponent {

  taskArray: Task[] = [];
  selectedTask: Task = {} as Task;
  editingIndex: number | null = null;
  isNewTask: boolean = true;

  onSubmit(taskForm: any) {
    this.taskArray.push({
      firstname: taskForm.value.firstname,
      lastname: taskForm.value.lastname,
      email: taskForm.value.email,
      phone: taskForm.value.phone,
      fromplace: taskForm.value.fromplace,
      toplace: taskForm.value.toplace,
      date: new Date(taskForm.value.date),
      travellerCount: taskForm.value.travellerCount
    });
    taskForm.resetForm();
    console.log(this.taskArray);
  }
}
