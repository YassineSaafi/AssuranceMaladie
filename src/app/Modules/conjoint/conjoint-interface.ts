export interface Conjoint {
    id: number;
    nom: string;
    prenom: string;
    profession: string;
    taille: number;
    poids: number;
    maladie: boolean;
    infirmite: boolean;
    maladiePsychiatrique: boolean;
    maladiesCancereuses: boolean;
    operations: boolean;
    epoqueOperations: string;
    descriptionInfirmite: string;
    descriptionMaladiesPsychiatrique: string;
    descriptionMaladiesCancereuses: string;
    descriptionOperation: string;
  }
  