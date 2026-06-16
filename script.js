function iniciarJogo() {
    
    alert("0: A motivação\nRoque teve a ideia de criar um festival de música pela internet, chamado Rock in Reels. A Banda Jota Qwert já está dentro! Agora ele precisa convidar mais músicos para buscar patrocínios.");

    let escolha1 = prompt("01: Primeiro convite: Tias Fofinhas\nAs Tias Fofinhas exigiram 50 toalhas de crochê no camarim. Mas o evento é online e não tem camarim.\n\nO que Roque deve fazer?\n[1] Falar a verdade\n[2] Mentir que tem camarim")?.trim();

    if (escolha1 === "1") {
     
        let escolha2 = prompt("02: Verdade; Yasmina\nElas apreciaram a sinceridade e indicaram Yasmina e os Manos. Yasmina pediu para ser marcada em todas as fotos para atrair seu público.\n\nRoque deve aceitar essa exigência?\n[1] Aceitar\n[2] Rejeitar")?.trim();

        if (escolha2 === "1") {
         
            let escolha3 = prompt("04: Aceitar Yasmina; HT\nO evento viraliza! A desconhecida banda Horrível Trio (HT) se oferece para tocar. As músicas são relaxantes, mas Roque teme que o público durma.\n\nRoque deve aceitar Horrível Trio?\n[1] Sim\n[2] Não")?.trim();

            if (escolha3 === "1") {

                let escolha4 = prompt("08: Aceita HT; amazonia\nFoi maravilhoso! Jeferson Bezerra (CEO da amazonia) adorou e fez uma super proposta financeira, mas pediu para cortar as bandas cover (Jota Qwert e Tias Fofinhas) por causa de direitos autorais.\n\nRoque deve aceitar a proposta, cortando as bandas originais?\n[1] Sim (Cortar)\n[2] Não (Manter as bandas)")?.trim();

                if (escolha4 === "1") {
                                    
                    alert("10: Corta covers\nO corte revolta os fãs e o festival sofre um enorme cancelamento. Ninguém mais quer se atrelar ao evento e ele nunca mais acontece.\nFIM.");
                } else if (escolha4 === "2") {
                                    
                    alert("11: Mantém covers\nRoque nega a proposta. Jeferson usa sua influência e consegue liberação dos direitos. O festival é um sucesso estrondoso na nova rede social!");
                                    
                    let faseExtra = prompt("FASE BÔNUS: O Futuro do Rock in Reels!\nCom o sucesso mundial, Jeferson oferece financiar a próxima edição. Ele te dá duas opções de formato:\n\n[1] Fazer um festival presencial gigante em São Paulo\n[2] Fazer um festival 100% no Metaverso usando avatares holográficos")?.trim();
                                    
                    if (faseExtra === "1") {
                        alert("VITÓRIA ÉPICA! O evento presencial lota o estádio. As Tias Fofinhas ganham 500 toalhas de crochê jogadas pelos fãs no palco. Roque se torna uma lenda viva da música!\nFIM.");
                    } else if (faseExtra === "2") {
                        alert("BOM, MAS COM BUGS... O evento no Metaverso é legal, mas o avatar do Horrível Trio buga e vira um meme global. O festival rende boas risadas e lucro, mas Roque sente falta do calor do público.\nFIM.");
                    } else {
                        alert("Roque ficou indeciso por tanto tempo que outra pessoa patenteou o nome do festival. Tente novamente!");
                    }
                } else {
                    alert("Opção inválida! O jogo foi encerrado.");
                }

            } else if (escolha3 === "2") {
                alert("09: Rejeita HT\nRoque não inclui a HT. O evento tem alguma relevância, mas nunca decola completamente. Vai virar um festival de Rap na próxima edição.\nFIM.");
            } else {
                alert("Opção inválida! O jogo foi encerrado.");
            }

        } else if (escolha2 === "2") {
                
            alert("05: Rejeitar Yasmina\nRoque fica receoso e rejeita a proposta. O Rock in Reels não viraliza. Acontece, mas o evento nunca explode para o sucesso que poderia ter sido.\nFIM.");
        } else {
            alert("Opção inválida! O jogo foi encerrado.");
        }

    } else if (escolha1 === "2") {
        
        let escolha5 = prompt("03: Mentir; Lucio Fernando\nRoque mente. As Tias descobrem, desistem e a Jota Qwert também pula fora. O pai de Roque, Lucio Fernando, oferece o salão da sua fábrica e dinheiro para trazer as bandas, caso assine um contrato.\n\nRoque deve assinar o contrato?\n[1] Sim\n[2] Não")?.trim();

        if (escolha5 === "1") {
                
            alert("07: Aceitar o contrato\nRoque assina o contrato. Consegue o financiamento, mas o festival atinge um sucesso gigantesco apenas no submundo da música.\nFIM.");
        } else if (escolha5 === "2") {
                
            alert("06: Não assinar o contrato\nRoque não aceita. Sem bandas e festival, ele faz um mini show. Sente-se tão triste por ter mentido que compõe a música 'Perdão'. As Tias Fofinhas ouvem, se emocionam e o perdoam, prometendo tocar se ele retomar o projeto.\nFIM.");
        } else {
            alert("Opção inválida! O jogo foi encerrado.");
        }

    } else {
        alert("Você não digitou uma opção válida. Recarregue a página e tente de novo!");
    }
}