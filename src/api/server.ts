const token ="0e1b7f0f2c88d5409e136bde7b3017d05d7ac8f4f7d39733"
export const server_calls = {
    get: async () => {
        const response = await fetch(`https://shiny-organic-animantarx.glitch.me/api/sodas`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Acess-Control-Allow-Origin': '*'
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(  data: any = {}) => {
        const response = await fetch(`https://shiny-organic-animantarx.glitch.me/api/sodas`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://shiny-organic-animantarx.glitch.me/api/sodas/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('failed to update data on server')
        }
    },
    delete: async(id:string) => {
        const response = await fetch(`https://shiny-organic-animantarx.glitch.me/api/sodas/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*'
            }
        })
        if (!response.ok){
            throw new Error('failed to update on server')
        }
        return;
    }
    
}