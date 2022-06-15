import React from "react";

type MessageTypeProps = {
    message: string
}

export const Message = (props: MessageTypeProps) => {
    return (
        <div>{'- ' + props.message}</div>
    )

}