export enum NavigationType {
    MODULE = 1,
    SUBMODULE = 2    
}

export interface NavigationModel {
    title: string;
    type: NavigationType;
    route: string
    icon: string;
    children?: NavigationModel[];    
}