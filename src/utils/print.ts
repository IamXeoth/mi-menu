export const printMenu = (): void => {
  const menuElement = document.getElementById('menu-preview');
  if (!menuElement) {
    console.error('Elemento do menu não encontrado');
    return;
  }

  // Criar uma nova janela
  const printWindow = window.open('', '_blank', 'width=800,height=600');
  if (!printWindow) {
    alert('Não foi possível abrir a janela de impressão. Por favor, verifique se o bloqueador de pop-ups do seu navegador está desabilitado para este site e tente novamente.');
    return;
  }

  // Clonar o conteúdo do menu
  const menuContent = menuElement.cloneNode(true) as HTMLElement;
  
  // Criar o HTML completo para impressão
  const printHTML = `
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cardápio - Impressão</title>
        <meta name="description" content="Mi Menú - Sistema de Cardápios" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: #2d2d2d;
            background: white;
            padding: 40px;
            max-width: 800px;
            margin: 0 auto;
          }
          
          .menu-header {
            text-align: center;
            margin-bottom: 40px;
            border-bottom: 3px solid #10B981;
            padding-bottom: 20px;
          }
          
          .restaurant-name {
            font-family: 'Playfair Display', serif;
            font-size: 48px;
            font-weight: 700;
            color: #065F46;
            margin-bottom: 10px;
          }
          
          .menu-subtitle {
            font-size: 18px;
            color: #666;
            font-weight: 300;
          }
          
          .category-section {
            margin-bottom: 40px;
            page-break-inside: avoid;
          }
          
          .category-title {
            font-family: 'Playfair Display', serif;
            font-size: 28px;
            font-weight: 600;
            color: #065F46;
            margin-bottom: 25px;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 2px;
            border-bottom: 2px solid #10B981;
            padding-bottom: 10px;
          }
          
          .menu-item {
            margin-bottom: 25px;
            padding-bottom: 20px;
            border-bottom: 1px solid #E5E7EB;
            page-break-inside: avoid;
          }
          
          .menu-item:last-child {
            border-bottom: none;
          }
          
          .menu-item-flex {
            display: flex;
            align-items: flex-start;
            gap: 20px;
          }
          
          .menu-item img {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 12px;
            flex-shrink: 0;
            border: 2px solid #10B981;
          }
          
          .item-content {
            flex: 1;
          }
          
          .item-name {
            font-size: 20px;
            font-weight: 600;
            color: #065F46;
            margin-bottom: 8px;
            font-family: 'Playfair Display', serif;
          }
          
          .item-description {
            font-size: 15px;
            color: #666;
            line-height: 1.6;
            margin-bottom: 5px;
          }
          
          .item-price {
            font-size: 22px;
            font-weight: 700;
            color: #10B981;
            white-space: nowrap;
            margin-left: auto;
            align-self: flex-start;
          }
          
          .menu-footer {
            margin-top: 50px;
            text-align: center;
            font-size: 14px;
            color: #999;
            border-top: 1px solid #E5E7EB;
            padding-top: 20px;
          }
          
          @media print {
            body { 
              padding: 20px;
              font-size: 14px;
            }
            .restaurant-name { 
              font-size: 36px; 
            }
            .category-title { 
              font-size: 24px; 
            }
            .item-name {
              font-size: 18px;
            }
            .item-price {
              font-size: 18px;
            }
            .menu-item img {
              width: 60px;
              height: 60px;
            }
          }
          
          @media screen {
            body {
              background: #f9f9f9;
            }
            .print-button {
              position: fixed;
              top: 20px;
              right: 20px;
              background: #10B981;
              color: white;
              border: none;
              padding: 12px 24px;
              border-radius: 8px;
              cursor: pointer;
              font-size: 16px;
              font-weight: 600;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              z-index: 1000;
            }
            .print-button:hover {
              background: #059669;
            }
          }
        </style>
      </head>
      <body>
        <button class="print-button" onclick="window.print()">🖨️ Imprimir / Salvar PDF</button>
        ${menuContent.outerHTML}
        <div class="menu-footer">
          <div class="text-center space-y-2">
            <p class="text-sm text-gray-500">
              Cardápio gerado em ${new Date().toLocaleDateString('pt-BR')}
            </p>
            <p class="text-xs text-gray-400">
              Criado com Mi Menú - Sistema de Cardápios
            </p>
          </div>
        </div>
        <script>
          // Auto-focus na janela para facilitar impressão
          window.focus();
          
          // Aguardar carregamento das imagens
          const images = document.querySelectorAll('img');
          let loadedImages = 0;
          
          if (images.length === 0) {
            // Se não há imagens, pode imprimir imediatamente
            console.log('Cardápio pronto para impressão');
          } else {
            images.forEach(img => {
              if (img.complete) {
                loadedImages++;
              } else {
                img.onload = () => {
                  loadedImages++;
                  if (loadedImages === images.length) {
                    console.log('Todas as imagens carregadas - pronto para impressão');
                  }
                };
                img.onerror = () => {
                  loadedImages++;
                  if (loadedImages === images.length) {
                    console.log('Imagens processadas - pronto para impressão');
                  }
                };
              }
            });
          }
        </script>
      </body>
    </html>
  `;

  // Escrever o HTML na nova janela
  printWindow.document.write(printHTML);
  printWindow.document.close();
  
  // Aguardar um pouco para garantir que tudo carregou
  setTimeout(() => {
    printWindow.focus();
  }, 500);
};

export const downloadPDF = (): void => {
  // Usar a mesma função de impressão - o usuário pode escolher "Salvar como PDF" na dialog de impressão
  printMenu();
};