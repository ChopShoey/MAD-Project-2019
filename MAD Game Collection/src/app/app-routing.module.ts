import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ArenaComponent } from "./pages/arena/arena.component";
import { CatsComponent } from "./pages/cats/cats.component";
import { HomeComponent } from "./pages/home/home.component";
import { LeaderboardComponent } from "./pages/leaderboard/leaderboard.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { SudokuComponent } from "./pages/sudoku/sudoku.component";

const routes: Routes = [
    // tslint:disable-next-line:max-line-length
    { path: "", redirectTo: "/home)", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "arena", component: ArenaComponent },
    { path: "cats", component: CatsComponent },
    { path: "sudoku", component: SudokuComponent },
    { path: "leaderboard", component: LeaderboardComponent },
    { path: "settings", component: SettingsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
