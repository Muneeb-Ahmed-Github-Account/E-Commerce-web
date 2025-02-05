export interface Products {
    _id : string
    name : string
    _type : "products";
    image? : {
        asset :{
            _ref : string;
            _type : "image"
        }
    };
    price: number;
    description? : string; 
    discountPercent? : number
    new? : boolean
    
}
export interface AllProducts {
    _id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    discountPercent?: number; // Optional
    new?: boolean; // Optional
    colors: string[];
    sizes: string[];
  }
  