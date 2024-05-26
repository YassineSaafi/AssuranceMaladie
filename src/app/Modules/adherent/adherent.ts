export interface Adherent {
    id: number;
    nonFamille: string;
    prenom: string;
    datenaissance: Date;
    lieu: string;
    sexe: string;
    situationFamillle: string;
    dateadherentAssurance: Date;
    cin: string;
    matriculeCnam: string;
    telephone: string;
    rib: string;
    adresseAdherent: string;
    gouvernement: string;
    profession: string;
    montantSalaire: string;
    taille: string;
    poids: string;
    maladie: boolean;
    infirmite: boolean;
    maladiesPsychiatrique: boolean;
    maladiesCancerceuses: boolean;
    operation: boolean;
    epoqueOperations: Date;
    discriptionMaladiesPsychiatrique: string;
    discriptionMaladiesCancereuses: string;
    descriptionOperations: string;
    beneficaire: string;
    description: string;
  }
  