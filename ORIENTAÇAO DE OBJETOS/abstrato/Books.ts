class Library 




class Book{
    title:string
    autor:string
    isbn:number
    numberPage:number
    genero:string

    constructor(title:string,
        autor:string,
        isbn:number,
        numberPages:number,
        genero: string
    )
    {
        this.title=title
        this.autor=autor
        this.isbn=isbn
        this.numberPage=numberPages
        this.genero=genero
    }
}

class Revista{
    title:string
    publisher:string
    issn:number
    numberEdiction:number
    datePublisher: Date

    constructor(title:string,
        publisher:string,
        issn:number,
        numberEdiction:number,
        datePublisher:Date
    )
    {
        this.title=title
        this.publisher=publisher
        this.issn=issn
        this.numberEdiction=numberEdiction
        this.datePublisher=datePublisher
    }
}

class User{
    name:string
    registration:string
    type: Array<string> = ['student','teacher','employee']
    borrowed: string
}

class Borrowed{
    dateBorowed:Date
    dateDevolution:Date
    user:User
    borrowedItem:string
}