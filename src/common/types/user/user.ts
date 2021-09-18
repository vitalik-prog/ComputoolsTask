type User = {
    id: number
    data: {
        email: string
        first_name: string
        last_name: string
        avatar: string
    }
    support: {
        url: string
        text: string
    }
}

export type { User }
