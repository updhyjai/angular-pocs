import { Component, EventEmitter, Output } from '@angular/core';
import { FeatureType } from '../course-project.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    selectedFeature: string;
    availableFeatures = {...FeatureType}
    @Output() featureSelected = new EventEmitter<string>();

    onSelect(featureType){
      this.featureSelected.emit(featureType)
    }
}
