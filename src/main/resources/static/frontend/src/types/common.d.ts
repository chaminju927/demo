export declare interface workerType {
  data: {
    no: number;
    name: string;
    phone: number;
    email: string;
  };
}

export interface result {
  loading: boolean;
  error: string;
  data: workerType[];
}

export interface dataType { //메인 리스트에서만 사용
  no: number;
  name: string;
  phone: number;
  email: string;
}

export type clicked = "search" | "add" | "";
export type newType = workerType & { clicked: clicked };
