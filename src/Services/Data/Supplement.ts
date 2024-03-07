export interface Supplements {
    id: number;
    name: string;
    img_supplements: string;
    category: string;
    qte_stock: number;
    price: number;
    maker: string;
    flavors: Flavor[];
    quantity_dosage: Quantity[];
  }

export interface Quantity {
id: number;
dosage_qte: string;
}

export interface Flavor {
id: number;
name: string;
}
