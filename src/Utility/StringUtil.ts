export class StringUtil {

    /*-------------------------------------------------------------------------
     * Public Method
     *-----------------------------------------------------------------------*/
    public static IsWhiteSpace(line: string): boolean {
        return (line === null || line.trim() === "");
    }

    public static IsCodeBlockStart(line: string): boolean {
        return (line.indexOf("{") !== -1) || (line.indexOf(";") !== -1);
    }

    public static RemoveComment(line: string): string {
        return line.replace(/\/\/.*/, "").replace(/\/\*.*/, "");
    }

    public static GetIndent(line: string): string {
        return line.match(/([ \t]*)?/)[0];
    }

}
