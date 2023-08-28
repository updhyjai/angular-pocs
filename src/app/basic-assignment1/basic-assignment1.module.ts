import { NgModule } from "@angular/core";
import { SuccessAlertComponent } from "../alerts/success/success-alert.component";
import { WarningAlertComponent } from "../alerts/warning/warning-alert.component";
import { BasicAssignment1Component } from "./basic-assignment1.component";

@NgModule({
    declarations:[
        BasicAssignment1Component,
        SuccessAlertComponent,
        WarningAlertComponent
    ],
    exports:[BasicAssignment1Component]
})
export class BasicAssignment1Module{}