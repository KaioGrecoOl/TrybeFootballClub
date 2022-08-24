export default interface Iteams<T> {
  getAllTeamsService(): Promise<T[]>
}
