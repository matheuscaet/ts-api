export interface iLinkApiResponseUser {
    data: {
        pagination: {
            page: number,
            limit: number
        },
        usersList: {
            type: string,
            item: [
                {
                    createdAt: Date,
                    firstName: string,
                    avatar: string,
                    email: string,
                    lastName: string,
                    id: string
                },
            ]
        }
    }
}

export interface iLinkApiResponseUserAddress {
    data: {
        type: string,
        item: [
            {
                street: string,
                city: string,
                state: string,
                zipcode: string,
                country: string,
                number: {
                    type: string,
                    $t: string
                },
                id: string,
                userId: string
            }
        ]
    }
}

export interface iLinkApiResponseUserContacts {
    data: {
        type: string,
        item: {
            name: string,
            phoneNumber: string,
            email: string,
            id: string,
            userId: string
        }
    }
}

export interface iLinkItem {
    createdAt: Date,
    firstName: string,
    avatar: string,
    email: string,
    lastName: string,
    id: string
}
