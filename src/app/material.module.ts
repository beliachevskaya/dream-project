import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule]
})

export class MaterialModule {
}
