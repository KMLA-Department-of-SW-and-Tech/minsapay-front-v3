export interface LoginInfo {
  id: string;
  pw: string;
  setID: (id: string) => void;
  setPW: (pw: string) => void;
}
