import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    @Output() currentFeature = new EventEmitter<string>();

    onSelect(feature: string) {
        this.currentFeature.emit(feature);
    }

    onShoppingListClick = function() {
        console.log('navigate to shopping list');
    }
}