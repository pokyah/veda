import * as path from 'path';
const isRelative = require('is-relative');

export function convertPathForServer(
    projectPath: string,
    port: number,
    target: string,
) {
    if (target.match(/^(?:https?:)?\/\//)) {
        return target;
    }

    // Fix target to absolute path
    if (isRelative(target)) {
        target = path.join(projectPath, target);
    }

    // Get relative path from projectPath
    const relativePath = path.relative(projectPath, target);

    return `http://localhost:${port}/link/${relativePath}`;
}
