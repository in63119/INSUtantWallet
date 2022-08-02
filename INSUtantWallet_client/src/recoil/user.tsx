import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export interface userStateTypes {
  isLogin: boolean;
  mainAddress: string;
  testAddress: string;
}

export const userState = atom<userStateTypes>({
  key: "user",
  default: {
    isLogin: false,
    mainAddress: "",
    testAddress: "",
  },
  effects_UNSTABLE: [persistAtom],
});
