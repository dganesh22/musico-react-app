import React, { useState, useEffect,  } from 'react'
import { toast } from 'react-toastify'
import key from '../config/token'
import "./styles/home.css"
import Artist from './Artist'
import Search from './screens/Search'

const URL = 'https://api.spotify.com'


function Home(props) {
    const [artist,setArtist] = useState([])
    const [album,setAlbum] = useState([])

    // logic to search artists
    const searchArtist =  async (artistName,type,limit) => {
            await fetch(`${URL}/v1/search?q=${artistName}&type=${type}&limit=${limit}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${key}` // oAuth 2.0 header authorization
                }
            })
                .then(res => res.json())
                .then(resp => {
                    console.log(resp)
                    setArtist(resp.artists.items)
                }).catch(err => toast.error(err.message))
        }
        // logic to search albums
    const searchAlbum =  async (artistName,type,limit) => {
            await fetch(`${URL}/v1/search?q=${artistName}&type=${type}&limit=${limit}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${key}` // oAuth 2.0 header authorization
                }
            })
                .then(res => res.json())
                .then(resp => {
                    console.log(resp)
                    setAlbum(resp.albums.items)
                }).catch(err => toast.error(err.message))
        }

        useEffect(() => {
            searchArtist("SPB","artist",20)
            searchAlbum("SPB","album",20)
        }, [])


    return (
        <section id="home-banner">
            <div className="container d-flex align-items-center justify-content-center">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="display-1 text-light">MUSICO</h1>

                        <Search sArtist={searchArtist}/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="display-4 text-center text-success mt-4 mb-3">Artists</h4>
                    </div>
                </div>
                <div className="row">
                    {
                        artist && artist.map((item,index) => {
                            return (
                                <Artist key={index} {...item}  />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Home