import { Routes,RouterOutlet } from '@angular/router';
import { JavaIntroduction } from './Java/Chapter 01 - java-introduction/java-introduction'; 
import { JavaDatatypes } from './Java/Chapter 02 - java-datatypes/java-datatypes'; 
import { JavaContext } from './Java/Chapter 00 - java-context/java-context';
import { AngularContext } from './Angular/Chapter 00 - angular-context/angular-context'; 
import { SpringBootContext } from './SpringBoot/Chapter 00 - spring-boot-context/spring-boot-context'; 

export const routes: Routes = 
[
    { path: 'java/context', component: JavaContext},
    { path: 'java/introduction', component: JavaIntroduction},
    { path: 'java/datatypes', component: JavaDatatypes},
    { path: 'springboot/context', component: SpringBootContext},
    { path: 'angular/context', component: AngularContext},
];
