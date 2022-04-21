import { Model, createServer } from "miragejs";

export function makeServer() {
    const server = createServer({
        models: {
            transaction: Model,
        },
        
        seeds(server) {
            server.db.loadData({
                transactions:[
                    {
                        id: 1,
                        title: 'Dev de site',
                        amount: 3000,
                        category: 'Desenvolvimento',
                        type: 'deposit',
                        createdAt: '2021-11-09 19:00:00'
                    },
                    {
                        id: 2,
                        title: 'Aluguel',
                        amount: 1250,
                        category: 'Casa',
                        type: 'withdraw',
                        createdAt: '2021-11-09 15:23:00'
                    }
                ],
            })
        },
        routes() {
            this.namespace = 'api';
            this.timing = 750;
    
            this.get('/transactions', () => {
                return this.schema.all('transaction')
            })
            
            this.post('/transactions', (schema, request) => {
                const data = JSON.parse(request.requestBody)
    
                return schema.create('transaction', data);
            })
        }
    })
    return server
}