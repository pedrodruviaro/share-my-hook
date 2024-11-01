import type { User } from "./User"

export type UserInfos = Pick<User, "name" | "bio" | "jobtitle" | "site">
