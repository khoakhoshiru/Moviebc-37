import requester from "app/api";
const { apiPath } = require("app/apiPath");

//?maHeThongRap=Galaxy&maNhom=GP01
export const getScheduleMovieCinema = async (maHeThongRap) => {
    const res = await requester({
        method: "GET",
        url: apiPath.SCHEDULE_CINEMAS + `?maHeThongRap=${maHeThongRap}&maNhom=GP01`
    });

    return res;
}
