import {GitHubRepo} from "./model";
import * as React from "react";

export function RepoTableRow({name, stars, url}: GitHubRepo) {
    return (
        <tr>
            <td>{name}</td>
            <td>{stars > 0 ? `${stars} ⭐` : '-'}</td>
            <td><a href={url}>🔗</a></td>
        </tr>
    );
}