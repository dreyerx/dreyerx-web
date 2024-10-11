type Category = 'infra' | 'dex' | 'bridge' | 'wallet' | 'gaming' | 'nft' | 'sdk' | 'other';

export interface EcosystemProps {
    name: string;
    category: Category;
    image: string;
    url: string;
    description: string;
}

export default function defineEcosystem(ecosystemData: EcosystemProps): EcosystemProps {
    return ecosystemData;
}