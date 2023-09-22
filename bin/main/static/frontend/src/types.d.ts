interface workerType {
    data: {
      no: number,
      name: string,
      phone: number,
      email: string,
    }
  }
  interface result{
    loading: boolean;
    error: string;
    data: workerType[];
  }
  
  const initialState: result = {
    loading: false,
    error: null,
    data: []
  }

  interface dataType { // 리덕스 스토어와 별개. 메인 리스트 타입
    no: number;
    name: string;
    phone: number;
    email: string;
}

type clicked = {
    clicked: string;
}
type newType = workerType & clicked;