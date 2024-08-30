type Category = 'infra' | 'dex' | 'bridge' | 'wallet' | 'gaming' | 'nft' | 'sdk' | 'other';

interface Ecosystem {
    name: string;
    category: Category;
    image: string;
    url: string;
    description: string;
}

export default function defineEcosystem(ecosystemData: Ecosystem): Ecosystem {
    return ecosystemData;
}