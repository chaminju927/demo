export interface workerType {
  data: {
    no: number;
    name: string;
    phone: number;
    email: string;
  };
}

export interface resType {
  loading: boolean;
  error: string;
}

export interface listType { //메인 리스트에서만 사용
  no: number;
  name: string;
  phone: number;
  email: string;
}

export type clicked = "search" | "add" | "" | "edit";

export type mainType = workerType & { clicked ? : clicked }  //리덕스 스토어
export type result = workerType & resType;  //리듀서에서 사용