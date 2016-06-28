interface JSONFighterDetail {
    feed: {
        title: {
            $t: string // Chunli
        }
        entry: {
            title: {
                $t: string // Stand Lp
            },
            content: {
                $t: string // Startup 4, active 2, ....
            }
        }[]
    }
}

export = JSONFighterDetail;