import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProp {
    user: IUser;
    onClick: (user: IUser) => void;
}

const UsersItem: FC<UserItemProp> = ({user, onClick}) => {
        return (
                <div onClick={()=> onClick(user)} style={{padding: 15, border: '1px solid gray'}}>
                    {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
                </div>
        );
}

export default UsersItem;