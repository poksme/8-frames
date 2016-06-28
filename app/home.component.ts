import {Component} from '@angular/core';

@Component({
    template:`
    <h2>{{title}}</h2>
    <p>This is a work in progress Angular 2 application designed to display Street Fighter V frame data.</p>
    <p>The data is fetched from <a href="https://docs.google.com/spreadsheets/d/1qHH6gZ6_TvY1FGWlMNYjxUOGb9_aX9fsNOptmKks1SA/edit?usp=sharing">this google doc</a> which is a copy of <a href="https://docs.google.com/spreadsheets/d/1976rt8B91PqVCeYJAmcnW1uwVJ0H03QJtV-dJC5ohL8/htmlview?sle=true#">this original google doc</a>.<br>Design, content and pretty much everything is subject to change.</p>
    <p class="info">This project is developed for educational purpose, it is free and open. Check the repository, fork it, play with it.</p>
    `
}) export class HomeComponent {
    title: string = "Introduction";
}