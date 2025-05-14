export interface MemberProps {
  id: string;
  name: string;
  imgAvatar: string;
}

export interface ServiceProps {
  imgCategory: string;
  category: string;
  members: MemberProps[];
}
