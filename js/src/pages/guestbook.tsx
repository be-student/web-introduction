import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import NavigationBar from "@/component/navigation";
import { Avatar } from "@mui/material";
import { useState } from "react";
import Guest from "@/component/guest";

type visited = {
  name: string;
  liked: string[];
};
function GuestBook() {
  const [guestBooks, setGuestBooks] = useState<visited[]>([
    {
      name: "누누",
      liked: [
        "해리포터와 아즈카반의 죄수",
        "아바타2",
        "인셉션",
        "인터스텔라",
        "어벤져스 엔드게임",
      ],
    },
  ]);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <div style={{ marginTop: "100px" }}></div>
          <h1>방명록</h1>
          {guestBooks.map((guestBook) => (
            <Guest name={guestBook.name} liked={guestBook.liked}></Guest>
          ))}
        </div>
        <NavigationBar />
      </main>
    </>
  );
}

export default GuestBook;
