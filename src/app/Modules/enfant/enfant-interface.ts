export interface EnfantInterface {
  id: number;
  nom: string;
  prenom: string;
  dateNaissance: Date;
  taille: number;
  poids: number;
  maladie: boolean;
  infirmite: boolean;
  maladiesPsychiatrique: boolean; // Correction de la propriété ici
  maladiesCancereuses: boolean;
  operations: boolean;
  descriptionMaladies: string;
  descriptionInfirmite: string;
  descriptionMaladiesPsychiatrique: string;
  descriptionMaladiesCancereuses: string;
  descriptionOperations: string;
}
