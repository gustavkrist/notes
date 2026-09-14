set clipboard=unnamed
unmap <Space>
imap jk <Esc>
nmap j gj
vmap j gj
nmap k gk
vmap k gk
nmap $ g$
vmap $ g$
nmap ^ g^
vmap ^ g^
nmap 0 g0
vmap 0 g0
nmap H ^
vmap H ^
nmap L $
vmap L $
nmap Y y$

" Surround
exmap surround_wiki surround [[ ]]
exmap surround_double_quotes surround " "
exmap surround_single_quotes surround ' '
exmap surround_brackets surround ( )
exmap surround_square_brackets surround [ ]
exmap surround_curly_brackets surround { }
exmap surround_angle_brackets surround < >
exmap surround_bars surround | |
exmap surround_backticks surround ` `
exmap surround_stars surround * *
exmap surround_dollars surround $ $

nunmap S
vunmap S
map S" :surround_double_quotes<CR>
map S' :surround_single_quotes<CR>
map S' :surround_single_quotes<CR>
map Sb :surround_brackets<CR>
map S) :surround_brackets<CR>
map S] :surround_square_brackets<CR>
map S} :surround_curly_brackets<CR>
map S> :surround_angle_brackets<CR>
map S| :surround_bars<CR>
map S` :surround_backticks<CR>
map S* :surround_stars<CR>
map S$ :surround_dollars<CR>

" Emulate Folding https://vimhelp.org/fold.txt.html#fold-commands
exmap togglefold obcommand editor:toggle-fold
nmap zo :togglefold<CR>
nmap zc :togglefold<CR>
nmap za :togglefold<CR>

exmap unfoldall obcommand editor:unfold-all
nmap zR :unfoldall<CR>

exmap foldall obcommand editor:fold-all
nmap zM :foldall<CR>

" Leader mappings
" Toggle focus mode
exmap togglefocus obcommand obsidian-minimal-settings:toggle-minimal-focus-mode
nmap <Space>z :togglefocus<CR>
exmap togglefiletree obcommand app:toggle-left-sidebar
nmap <Space>e :togglefiletree<CR>
" Vertical/horizontal splits
exmap vsplit obcommand workspace:split-vertical
nmap <Space>v :vsplit<CR>
exmap hsplit obcommand workspace:split-horizontal
nmap <Space>h :hsplit<CR>
exmap togglesource obcommand editor:toggle-source
nmap <Space>s :togglesource<CR>

" Pane movement
exmap focusright obcommand editor:focus-right
nmap <C-l> :focusright<CR>
exmap focusleft obcommand editor:focus-left
nmap <C-h> :focusleft<CR>
exmap focustop obcommand editor:focus-top
nmap <C-k> :focustop<CR>
exmap focusbottom obcommand editor:focus-bottom
nmap <C-j> :focusbottom<CR>

" Commands
exmap q obcommand workspace:close

imap <C-h> <left>
imap <C-j> <down>
imap <C-k> <up>
imap <C-l> <right>
nmap ZZ :q<CR>
