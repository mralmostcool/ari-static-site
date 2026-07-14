export type ProductType = {
    title: string;
    description: string;
    imageSrc: string;
    productsIncluded?: string[];
    groups: string[];
    includedSimulators?: string[];
    content?: [
        heading: string,
        description: string,
        content?: string,
        keyFeatures?: {
            title: string,
            description: string
        }[]
    ];
    images?: string[];
}