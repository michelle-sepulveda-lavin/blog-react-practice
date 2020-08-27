const getState = ({getStore, getActions, setStore}) =>{
    return{
        store: {
            services: null,
            events: null
        },
        actions: {
            getServices: async () =>{
                const resp = await fetch("/data/services.json");
                //console.log(resp);
                const data = await resp.json();
                console.log(data)
                setStore({
                    services: data.services
                })
            },
            getEvents: async () =>{
                const resp = await fetch("/data/events.json");
                //console.log(resp);
                const data = await resp.json();
                console.log(data)
                setStore({
                    events: data.events
                })
            },
            getBlogs: async () =>{
                const resp = await fetch("/data/blogs.json");
                //console.log(resp);
                const data = await resp.json();
                console.log(data)
                setStore({
                    blogs: data.blogs
                })
            }
        }

    }
}

export default getState;