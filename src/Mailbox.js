import React, { Component } from 'react';

export function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <hi>Hi, Man!</hi>
            {unreadMessages.length > 0 &&
            <h2>
                You have {unreadMessages.length} unread messages.
            </h2>
            }
        </div>
    )
}

export const messages = ['React', 'Re: REact', 'Re:Re: React'];