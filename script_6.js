const prot_map = {
  Serine: ['UCU', 'UCC', 'UCA', 'UCG', 'AGU', 'AGC'],
  Proline: ['CCU', 'CCC', 'CCA', 'CCG'],
	Leucine: ['UUA', 'UUG'],
	Phenylalanine: ['UUU', 'UUC'],
  Arginine: ['CGU', 'CGC', 'CGA', 'CGG', 'AGA', 'AGG'],
	Tyrosine: ['UAU', 'UAC'],
}

function find(codon) {
	for(const name in prot_map) {
		if(prot_map[name].includes(codon)) {
			return name
		}
	}
	return "Unknown"
}

function translate(rna) {

	const names = rna.match(/.{3}/g).map(find)
	return names
}

console.log(translate("CCGUCGUUGCGCUACAGC"));
console.log(translate("CCUCGCCGGUACUUCUCG"));
