export function fomataDescricao (descricao: string) {
	if (descricao.length > 130) {
		return descricao.slice(0, 120) + '...'
	}
	return descricao
}
export function formataTitulo (titulo: string) {
	return titulo.length > 24 ? titulo.slice(0, 20) + '...' : titulo;
};
