import useSWR from "swr";
import ExtLink from "./ExtLink";
import { SWRResponse } from "swr";
import { SongInformation } from "../lib/Music.types";

const fetcher = (...args: any[]) => fetch(args[0]).then((res) => res.json());

const Music = () => {
    const { data, error }: SWRResponse<SongInformation, Error> = useSWR(
        "/api/v1/music",
        fetcher
    );

    if (error || !data || !data.listening) return null;

    return (
        <p>
            I&#39;m currently listening to{" "}
            <ExtLink href={data.url as string}>
                {data.title} by {data.artist}
            </ExtLink>
            <style jsx>{`
        p {
          opacity: 0.5;
        }
      `}</style>
        </p>
    );
};

export default Music;