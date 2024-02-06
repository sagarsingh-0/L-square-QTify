import React from "react";
import Hero from "../../components/Hero/Hero";
import { useOutletContext } from "react-router-dom";
import Section from "../../components/Section/Section";
import styles from './HomePage.module.css';
import {fetchFilters} from "../../api/api";

function HomePage() {
    const {data} = useOutletContext();
    const {topAlbums, newAlbums, songs} = data;

    return(
        <>
        <Hero/>
        <div className={styles.wrapper}>
            <Section title="TopAlbums" data={topAlbums} type="album" />
            <Section title="NewAlbums" data={newAlbums} type="album" />
            <Section title="songs" data={songs} type="song" filterSource={fetchFilters} />
        </div>
        </>
    )
}

export default HomePage;