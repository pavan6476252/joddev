export type RoomResponse = {
  uid: string;
  public: boolean;
  title: string;
  subTitle: string;
  thumbnail: string;
  startTime: string;
  participants: any[]; // You can replace `any[]` with the actual type of participants.
  ended: boolean;
  _id: string;
  createdAt: string;
  __v: number;
};
