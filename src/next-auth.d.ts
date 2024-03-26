import NextAuth from 'next-auth'

declare module "next-auth" {
    interface Session {
        user: {
            _id: string,
            name: string,
            image:string,
            email: string,
            tel:string,
            role: string,
            token: string
             _doc: {
                _id: string;
                name: string;
                image: string;
                email: string;
                tel: string;
                role: string;
                password: string; 
                createdAt: string;
                __v: number;
  };
        }
    }
}